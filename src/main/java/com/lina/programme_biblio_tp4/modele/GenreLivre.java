package com.lina.programme_biblio_tp4.modele;

import java.util.Arrays;
import java.util.stream.Stream;

public enum GenreLivre {
    ROMAN("ROMAN"),
    MANUEL("MANUEL"),
    ETUDE("ETUDE"),
    MAGAZINE("MAGAZINE");

    private String nomGenreLivre;
    GenreLivre(String nomGenreLivre) {
        this.nomGenreLivre = nomGenreLivre;
    }

    @Override
    public String toString(){
        return nomGenreLivre;
    }

    public static GenreLivre get(String nomGenreLivre) {
        Stream<GenreLivre> values = Arrays.stream(GenreLivre.values());
        values = values.filter(fieldTag -> fieldTag.nomGenreLivre.equalsIgnoreCase(nomGenreLivre));
        if (values == null) {
            return null;
        } else {
            return values.findFirst().get();
        }
    }
}
