export default async function About() {
  const res = await fetch("https://meowfacts.herokuapp.com/", {
    next: { tags: ["about"] }, // 0일 때는 SSR로 동작
    // cache: "no-store", // 캐시를 사용하지 않겠다. -> SSR
  });

  const { data } = (await res.json()) as { data: string[] };

  return (
    <div style={{ height: "100vh" }}>
      About Page
      <ul>
        {data.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
      {Math.random()}
    </div>
  );
}
