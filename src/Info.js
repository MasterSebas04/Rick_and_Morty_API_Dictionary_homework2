export default function Info({ data }) {
  return data.name &&
    data.image &&
    data.id &&
    data.status &&
    data.species &&
    data.origin &&
    data.location ? (
    <>
      <section>
        <div className="photo_name_box">
          <figure>
            <img id="character_image" src={data.image} alt={data.name} />
          </figure>
          <h3> [{data.name}]</h3>
        </div>

        <div className="character_info">
          <p>
            <span className="label">ID Number: </span> {data.id}
          </p>
          <p>
            <span className="label">Status: </span> {data.status}
          </p>
          <p>
            <span className="label">Species: </span> {data.species}
          </p>
          <p>
            <span className="label">Origin: </span>{" "}
            {data.origin ? data.origin.name : "Unknown"}
          </p>
          <p>
            <span className="label">Current Location: </span>{" "}
            {data.location ? data.location.name : "Unknown"}
          </p>
        </div>
      </section>

      <footer>
        <div>©2024</div>
        <a href="https://codesandbox.io/p/sandbox/rick-and-morty-api-dictionary-3kcd2c">
          Sandbox Code
        </a>
      </footer>
    </>
  ) : (
    <p>No valid data</p>
  );
}
