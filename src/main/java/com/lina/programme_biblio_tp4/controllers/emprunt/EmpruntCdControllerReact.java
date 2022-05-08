package com.lina.programme_biblio_tp4.controllers.emprunt;

import com.lina.programme_biblio_tp4.forms.document.CdForm;
import com.lina.programme_biblio_tp4.service.ServiceEmpruntDocuments;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/empruntsCds")
public class EmpruntCdControllerReact {

    private ServiceEmpruntDocuments serviceEmpruntDocuments;

    @GetMapping
    public List<CdForm> getAllEmpruntsCds() {
        return null;
    }
}
