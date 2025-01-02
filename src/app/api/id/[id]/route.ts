import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const card = data.filter(card => {
    return card.id === id.toLowerCase();
  });
  return NextResponse.json({ result: card }, { status: 200 });
}
