package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.DocumentForm;
import com.lina.programme_biblio_tp4.service.ServiceDocument;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
