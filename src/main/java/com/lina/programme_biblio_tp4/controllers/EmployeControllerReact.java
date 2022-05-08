package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.utilisateurs.EmployeForm;
import com.lina.programme_biblio_tp4.service.ServiceEmploye;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employes")
public class EmployeControllerReact {

    private ServiceEmploye serviceEmploye;

    @GetMapping
    public List<EmployeForm> getAllEmployes() {
        return serviceEmploye.findAllEmployes();
    }

    @GetMapping("/{id}")
    public EmployeForm getEmploye(@PathVariable long id) {
        return serviceEmploye.getEmploye(id).orElseThrow(RuntimeException::new).toEmployeForm();
    }
}
