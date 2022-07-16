import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { Favorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritosPage = () => {
    const [favorites, setFavorites] = useState<number[]>([])

    useEffect(() => {
        setFavorites(localFavorites.getFavorites());
    }, []);

    return (<Layout title="Pokémon Favoritos">
        {
            favorites.length === 0 ?
                (<NoFavorites />) :
                (<Favorites pokemons={favorites} />)
        }
    </Layout>);
}

export default FavoritosPage;