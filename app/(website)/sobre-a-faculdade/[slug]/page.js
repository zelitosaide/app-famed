export default async function Page({ params }) {
  return (
    <h1>Sobre: {params.slug}</h1>
  );
}