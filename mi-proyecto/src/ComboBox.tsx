import { useState } from "react";
import axios from "axios";
interface Opcion {
  id: string;
  name: string;
  domains: string
}

const ComboBox = () => {
  const [opciones, setOpciones] = useState<Opcion[]>([]);
  const [query, setQuery] = useState("");
  const [ShowLoading, setShowLoading] = useState(false);
  const [showCombobox, setshowCombobox] = useState(false);

  const eventos = async (name: string) => {
    try {
      await axios.get<Opcion[]>(`http://localhost:3000/search?name=${name}`).then(function (response) {
        setShowLoading(true)
        setOpciones(response.data);
        if (response.data.length > 0) {
          setShowLoading(false)
          setshowCombobox(true)
        }
        else {
          setShowLoading(false)
          setshowCombobox(false)
        }


      });


    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }



  }
  return (
    <div className="relative w-64 mx-auto mt-10">
      <label> WebSite<i className="fa-solid fa-circle-question"></i></label>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={
          (e) => {
            eventos(e.target.value)
            setQuery(e.target.value)
          }

        }

        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {ShowLoading && (
        <ul id="boxselectorfound" className="absolute left-0 right-0 bg-white border rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto">
          <img src="/src/gif/loading.gif" />
        </ul>
      )}
      {opciones.length == 0 && !showCombobox && (
        <ul id="boxselectorfound" className="absolute left-0 right-0 bg-white border rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto">
          <li id="nofound">No result found</li>
        </ul>
      )}
      {opciones.length > 0 && showCombobox && (
        <ul id="boxselector" className="absolute left-0 right-0 bg-white border rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto">
          {opciones.map((item, index) => (
            <div className="combo-row pointer" id={item.id} onClick={(e) => eventos(query)} >
              <div className="combo-column1">
                <img src={"/src/icons/ic_" + item.id + ".svg"} />
              </div>
              <div className="combo-column2">
                <p><strong>{item.name}</strong> </p>
                <p className="sombreado">{item.name}</p>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;