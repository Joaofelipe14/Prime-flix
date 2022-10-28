import { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
import { toast } from 'react-toastify'


function Filme() {
    const { id } = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();




    useEffect(() => {
        async function loadFilmes() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: 'a3ef50865e921d2a0d3da7d458c6376c',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilmes(response.data);
                    setLoading(false);
                })
                .catch(()=>{
                    console.log("FILME NAO ENCONTRADO");
                    navigate("/", { replace: true });
                    return;
                  
                })
        }

        loadFilmes();
    }, [navigate,id])

    if (loading) {
        return (
            <div>
                <h2 className='filme-info'>
                    Carregando filme ....
                </h2>
            </div>
        )
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
    
        let filmesSalvos = JSON.parse(minhaLista) || [];
    
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filmes.id)
    
        if(hasFilme){
          toast.warn("Esse filme já está na sua lista!")
          return;
        }
    
        filmesSalvos.push(filmes);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    
      }
    return (
        <div className='filme-info'>
            <h1>{filmes.title} </h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title} />
            <h3>
                Sinopse
            </h3>
            <span>
                {filmes.overview}
            </span>
            <strong>
                Avaliação: {filmes.vote_average} / 10
            </strong>

           
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button> 
        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filmes.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>

        </div>
    )
}

export default Filme; 