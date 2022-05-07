package com.lina.programme_biblio_tp4.service;

import com.lina.programme_biblio_tp4.forms.document.CdForm;
import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.forms.document.DvdForm;
import com.lina.programme_biblio_tp4.forms.document.LivreForm;
import com.lina.programme_biblio_tp4.modele.*;
import com.lina.programme_biblio_tp4.repository.CdRepository;
import com.lina.programme_biblio_tp4.repository.DocumentRepository;
import com.lina.programme_biblio_tp4.repository.DvdRepository;
import com.lina.programme_biblio_tp4.repository.LivreRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public DocumentForm saveDocument(Document document) {
        DocumentForm documentResult = null;
        if (document.getGenreDocument().equalsIgnoreCase(Document.C_LIVRE)) {
            documentResult = saveLivre((Livre) document).toDocumentForm();
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_CD)) {
            documentResult = saveCD((CD) document).toDocumentForm();
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_DVD)) {
            documentResult = saveDVD((DVD) document).toDocumentForm();
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

    public Document getDocument(long documentId) {
        Document document = documentRepository.findById(documentId).orElseThrow(RuntimeException::new);
        Document documentResult = null;
        if (document.getGenreDocument().equalsIgnoreCase(Document.C_LIVRE)) {
            documentResult = getLivre(documentId).orElseThrow(RuntimeException::new);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_CD)) {
            documentResult = getCD(documentId).orElseThrow(RuntimeException::new);
        }
        else if (document.getGenreDocument().equalsIgnoreCase(Document.C_DVD)) {
            documentResult = getDVD(documentId).orElseThrow(RuntimeException::new);
        }
        return documentResult;
    }

    public List<DocumentForm> findAllDocuments() {
        List<Document> documentList = documentRepository.findAll();
        List<DocumentForm> documentFormList = new ArrayList<>();

        for (Document document : documentList) {
            documentFormList.add(document.toDocumentForm());
        }

        return documentFormList;
    }

    public CD saveCD(EtatDocument etatDocument,
                     String genreDocument,
                     String titre,
                     String auteur,
                     String editeur,
                     int anneePublication,
                     String genreMusique,
                     String compositeur,
                     String interprete) {
        return cdRepository.save(new CD(etatDocument,
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
    }

    public CD saveCD(CD cd) {
        return cdRepository.save(cd);
    }

    public void removeCD(CD cd) {
        cdRepository.delete(cd);
    }

    public Optional<CD> getCD(long cdID) {
        return cdRepository.findById(cdID);
    }

    public List<CdForm> findAllCds() {
        List<CD> cdList = cdRepository.findAll();
        List<CdForm> cdFormList = new ArrayList<>();

        for (CD cd : cdList) {
            cdFormList.add((CdForm) cd.toDocumentForm());
        }

        return cdFormList;
    }

    public DVD saveDVD(EtatDocument etatDocument,
                       String genreDocument,
                       String titre,
                       String auteur,
                       String editeur,
                       int anneePublication,
                       int duree,
                       String genreFilm) {
        return dvdRepository.save(new DVD(etatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                5,
                duree,
                genreFilm));
    }

    public DVD saveDVD(DVD dvd) {
        return dvdRepository.save(dvd);
    }

    public void removeDVD(DVD dvd) {
        dvdRepository.delete(dvd);
    }

    public Optional<DVD> getDVD(long dvdID) {
        return dvdRepository.findById(dvdID);
    }

    public List<DvdForm> findAllDvds() {
        List<DVD> dvdList = dvdRepository.findAll();
        List<DvdForm> dvdFormList = new ArrayList<>();

        for (DVD dvd : dvdList) {
            dvdFormList.add((DvdForm) dvd.toDocumentForm());
        }

        return dvdFormList;
    }

    public Livre saveLivre(EtatDocument etatDocument,
                           String genreDocument,
                           String titre,
                           String auteur,
                           String editeur,
                           int anneePublication,
                           int nbrPages,
                           GenreLivre genreLivre) {
        return livreRepository.save(new Livre(etatDocument,
                genreDocument,
                titre,
                auteur,
                editeur,
                anneePublication,
                2,
                nbrPages,
                genreLivre));
    }

    public Livre saveLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public void removeLivre(Livre livre) {
        livreRepository.delete(livre);
    }

    public Optional<Livre> getLivre(long livreId) {
        return livreRepository.findById(livreId);
    }

    public List<LivreForm> findAllLivres() {
        List<Livre> livreList = livreRepository.findAll();
        List<LivreForm> livreFormList = new ArrayList<>();

        for (Livre livre : livreList) {
            livreFormList.add((LivreForm) livre.toDocumentForm());
        }

        return livreFormList;
    }

    public List<Document> searchDocument(String titre,
                                         String auteur,
                                         int anneePublication,
                                         String genreDocument) {
        return documentRepository.searchDocument(titre,
                auteur,
                anneePublication,
                genreDocument);
    }
}