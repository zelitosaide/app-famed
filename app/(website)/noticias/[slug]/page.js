export default function Page({ params }) {
  return (
    <h1>Noticia: {params.slug}</h1>
  );
}