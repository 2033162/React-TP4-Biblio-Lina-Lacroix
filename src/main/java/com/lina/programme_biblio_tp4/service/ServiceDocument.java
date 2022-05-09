package com.lina.programme_biblio_tp4.service;

import com.lina.programme_biblio_tp4.dtos.document.CdDto;
import com.lina.programme_biblio_tp4.dtos.document.DocumentDto;
import com.lina.programme_biblio_tp4.dtos.document.DvdDto;
import com.lina.programme_biblio_tp4.dtos.document.LivreDto;
import com.lina.programme_biblio_tp4.modele.*;
import com.lina.programme_biblio_tp4.repository.CdRepository;
import com.lina.programme_biblio_tp4.repository.DocumentRepository;
import com.lina.programme_biblio_tp4.repository.DvdRepository;
import com.lina.programme_biblio_tp4.repository.LivreRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ServiceDocument {

    private DocumentRepository documentRepository;
    private CdRepository cdRepository;
    private DvdRepository dvdRepository;
    private LivreRepository livreRepository;

    public ServiceDocument(DocumentRepository documentRepository,
                           CdRepository cdRepository,
                           DvdRepository dvdRepository,
                           LivreRepository livreRepository) {
        this.documentRepository = documentRepository;
        this.cdRepository = cdRepository;
        this.dvdRepository = dvdRepository;
        this.livreRepository = livreRepository;
    }

    public DocumentDto saveDocument(Document document) {
        DocumentDto documentResult = null;
        if (document.getGenreDocument().equalsIgnoreCase(Document.C_LIVRE)) {
            documentResult = saveLivre((LivreDto) document.toDocumentForm());
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_CD)) {
            documentResult = saveCD((CdDto) document.toDocumentForm());
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_DVD)) {
            documentResult = saveDVD((DvdDto) document.toDocumentForm());
        }
        return documentResult;
    }

    public void removeDocument(Document document) {
        if (document.getGenreDocument().equalsIgnoreCase(Document.C_LIVRE)) {
            removeLivre((Livre) document);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_CD)) {
            removeCD((CD) document);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_DVD)) {
            removeDVD((DVD) document);
        }
    }

    public DocumentDto getDocument(long documentId) {
        Document document = documentRepository.findById(documentId).orElseThrow(RuntimeException::new);
        DocumentDto documentResult = null;
        if (document.getGenreDocument().equalsIgnoreCase(Document.C_LIVRE)) {
            documentResult = getLivre(documentId);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_CD)) {
            documentResult = getCD(documentId);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_DVD)) {
            documentResult = getDVD(documentId);
        }
        return documentResult;
    }

    public List<DocumentDto> findAllDocuments() {
        List<Document> documentList = documentRepository.findAll();
        List<DocumentDto> documentDtoList = new ArrayList<>();

        for (Document document : documentList) {
            documentDtoList.add(document.toDocumentForm());
        }

        return documentDtoList;
    }

    public CdDto saveCD(String etatDocument,
                     String genreDocument,
                     String titre,
                     String auteur,
                     String editeur,
                     int anneePublication,
                     String genreMusique,
                     String compositeur,
                     String interprete) {
        CD cd =  cdRepository.save(new CD(
                etatDocument == null ? null : EtatDocument.valueOf(etatDocument),
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                3,
                genreMusique,
                compositeur,
                interprete
        ));
        return (CdDto) cd.toDocumentForm();
    }

    public CdDto saveCD(CdDto cd) {
        return (CdDto) cdRepository.save((CD) cd.toDocument()).toDocumentForm();
    }

    public void removeCD(CD cd) {
        cdRepository.delete(cd);
    }

    public CdDto getCD(long cdID) {
        return (CdDto) cdRepository.findById(cdID).orElseThrow(RuntimeException::new).toDocumentForm();
    }

    public List<CdDto> findAllCds() {
        List<CD> cdList = cdRepository.findAll();
        List<CdDto> cdDtoList = new ArrayList<>();

        for (CD cd : cdList) {
            cdDtoList.add((CdDto) cd.toDocumentForm());
        }

        return cdDtoList;
    }

    public DvdDto saveDVD(String etatDocument,
                       String genreDocument,
                       String titre,
                       String auteur,
                       String editeur,
                       int anneePublication,
                       int duree,
                       String genreFilm) {
        DVD dvd = dvdRepository.save(new DVD(
                etatDocument == null ? null : EtatDocument.valueOf(etatDocument),
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                5,
                duree,
                genreFilm));
        return (DvdDto) dvd.toDocumentForm();
    }

    public DvdDto saveDVD(DvdDto dvd) {
        return (DvdDto) dvdRepository.save((DVD) dvd.toDocument()).toDocumentForm();
    }

    public void removeDVD(DVD dvd) {
        dvdRepository.delete(dvd);
    }

    public DvdDto getDVD(long dvdID) {
        return (DvdDto) dvdRepository.findById(dvdID).orElseThrow(RuntimeException::new).toDocumentForm();
    }

    public List<DvdDto> findAllDvds() {
        List<DVD> dvdList = dvdRepository.findAll();
        List<DvdDto> dvdDtoList = new ArrayList<>();

        for (DVD dvd : dvdList) {
            dvdDtoList.add((DvdDto) dvd.toDocumentForm());
        }

        return dvdDtoList;
    }

    public LivreDto saveLivre(String etatDocument,
                           String genreDocument,
                           String titre,
                           String auteur,
                           String editeur,
                           int anneePublication,
                           int nbrPages,
                           String genreLivre) {
        Livre livre = livreRepository.save(new Livre(
                etatDocument == null ? null : EtatDocument.valueOf(etatDocument),
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                2,
                nbrPages,
                genreLivre == null ? null : GenreLivre.valueOf(genreLivre)));
        return (LivreDto) livre.toDocumentForm();
    }

    public LivreDto saveLivre(LivreDto livre) {
        return (LivreDto) livreRepository.save((Livre) livre.toDocument()).toDocumentForm();
    }

    public void removeLivre(Livre livre) {
        livreRepository.delete(livre);
    }

    public LivreDto getLivre(long livreId) {
        return (LivreDto) livreRepository.findById(livreId).orElseThrow(RuntimeException::new).toDocumentForm();
    }

    public List<LivreDto> findAllLivres() {
        List<Livre> livreList = livreRepository.findAll();
        List<LivreDto> livreDtoList = new ArrayList<>();

        for (Livre livre : livreList) {
            livreDtoList.add((LivreDto) livre.toDocumentForm());
        }

        return livreDtoList;
    }

    public List<DocumentDto> searchDocument(String titre,
                                            String auteur,
                                            int anneePublication,
                                            String genreDocument) {
        List<Document> documents = documentRepository.searchDocument(titre,
                auteur,
                anneePublication,
                genreDocument);
        List<DocumentDto> documentDtos = new ArrayList<>();

        for (Document document : documents) {
            documentDtos.add(document.toDocumentForm());
        }

        return documentDtos;
    }
}