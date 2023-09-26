export default async function Page({ params }) {
  console.log(params);

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>{params.slug}</h1>
    </div>
  );
}