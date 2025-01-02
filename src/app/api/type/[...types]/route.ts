import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ types: string[] }> }
) {
  const types = (await params).types;

  const cards = data.filter(card => {
    let isType = false;
    for (const type of types) {
      isType = card.type.toLowerCase() === type.toLowerCase();
      if (isType) break;
    }
    return isType;
  });

  return NextResponse.json({ result: cards }, { status: 200 });
}
