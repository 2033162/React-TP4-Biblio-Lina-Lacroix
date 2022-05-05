package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.document.DocumentForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/documents")
public class DocumentControllerReact {

    private ServiceDocument serviceDocument;

    @GetMapping
    public List<DocumentForm> getAllDocuments() {
        return serviceDocument.findAllDocuments();
    }

    @GetMapping("/{id}")
    public DocumentForm getDocument(@PathVariable long id) {
        return serviceDocument.getDocument(id).toDocumentForm();
    }
}
