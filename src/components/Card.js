import React from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import CardItem from "./CardItem";
const Card = ({ img }) => {
  const [id, setId] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(null);
  const getDataFromId = React.useCallback(() => {
    setLoading(true);
    axios
      .get("https://api.punkapi.com/v2/beers/" + id)
      .then((res) => {
        setItem(res.data[0] || res.data);
        setLoading(false);
      })
      .catch((ex) => {
        alert(ex.message);
        setLoading(false);
      });
  }, [id]);
  const getData = React.useCallback(() => {
    setLoading(true);
    axios
      .get("https://api.punkapi.com/v2/beers/random ")
      .then((res) => {
        if (res.data) {
          setItem(res.data[0] || res.data);
        }
        setLoading(false);
      })
      .catch((ex) => {
        alert(ex.message);
        setLoading(false);
      });
  });
  React.useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="mt-2 mb-2">
      <div class="row g-2">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Rechercher..."
          />
        </div>
        <div className="col-auto">
          <button
            onClick={getDataFromId}
            type="submit"
            className="btn btn-primary mb-3"
          >
            Envoyer
          </button>
        </div>
      </div>

      {loading && <Skeleton width={"100%"} height={200} />}
      {!loading && <CardItem img={img} item={item} />}
      {!loading && (
        <div className="mt-4">
          <div className="btn btn-primary" onClick={getData}>
            récupérer une autre bière
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
