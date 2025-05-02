/* eslint-disable react/no-unescaped-entities */

type GoogleDriveAPIFile = {
  id: string;
  name: string;
  mimeType: string;
  createdTime: string;
};

type DriveFile = {
  id: string;
  name: string;
  album: string;
  mimeType: string;
  createdTime: string;
  url: string;
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAllFilesFromFolder(
  folderId: string,
  apiKey: string,
  album: string
): Promise<DriveFile[]> {
  const allFiles: DriveFile[] = [];
  let nextPageToken = '';
  const baseUrl = `https://www.googleapis.com/drive/v3/files`;

  do {
    const queryParams = new URLSearchParams({
      q: `'${folderId}' in parents`,
      key: apiKey,
      fields: 'nextPageToken, files(id, name, mimeType, createdTime)',
      pageSize: '100',
      pageToken: nextPageToken
    });

    const url = `${baseUrl}?${queryParams.toString()}`;
    const res = await fetch(url);

    const data: {
      nextPageToken?: string;
      files?: GoogleDriveAPIFile[];
    } = await res.json();

    if (!res.ok) {
      console.error(`Failed to fetch from folder ${folderId}:`, data);
      break;
    }

    const images: DriveFile[] = (data.files || []).map((f) => ({
      id: f.id,
      name: f.name,
      album,
      mimeType: f.mimeType,
      createdTime: f.createdTime,
      url: `https://www.googleapis.com/drive/v3/files/${f.id}?alt=media&key=${apiKey}`,
    }));

    allFiles.push(...images);
    nextPageToken = data.nextPageToken || '';
    await delay(300);
  } while (nextPageToken);

  return allFiles;
}

// In-memory cache
let cachedData: DriveFile[] | null = null;
let lastFetched = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export async function GET(): Promise<Response> {
  const now = Date.now();
  const apiKey = 'AIzaSyCFUArZsQJfE3FUtpV201Zx73qCQWYJEWA';

  const folders = [
    { id: '1hCK0K042jZGtE8ybyHfAHpOrrriTVOOj', album: 'Winter Camp' },
    { id: '1XYzVlSasigMbppuHpsxXbtDP3AiPDvGb', album: 'Events' }
  ];

  if (cachedData && now - lastFetched < CACHE_DURATION) {
    return new Response(JSON.stringify(cachedData), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const all: DriveFile[] = [];

    for (const { id, album } of folders) {
      const files = await fetchAllFilesFromFolder(id, apiKey, album);
      all.push(...files);
      await delay(500);
    }

    cachedData = all;
    lastFetched = now;

    return new Response(JSON.stringify(all), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    console.error('Gallery API Error:', error);
    return new Response(JSON.stringify({ error: 'Could not fetch images' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
