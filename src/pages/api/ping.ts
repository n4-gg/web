export const config = {
  runtime: "edge",
};

export default function handler() {
  return new Response("Pong!", { status: 200 });
}
