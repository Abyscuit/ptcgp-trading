import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ids: string }> }
) {
  const ids = (await params).ids;

  const cards = data.filter(card => {
    let isId = false;
    for (const id of ids) {
      isId = card.id.toLowerCase() === id.toLowerCase();
      if (isId) break;
    }
    return isId;
  });

  return NextResponse.json({ result: cards }, { status: 200 });
}
