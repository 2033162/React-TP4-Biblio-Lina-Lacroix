package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.utilisateurs.EmployeForm;
import com.lina.programme_biblio_tp4.service.ServiceEmploye;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping
    public ResponseEntity<EmployeForm> addEmploye(@RequestBody EmployeForm employeForm) {
        return new ResponseEntity<>(serviceEmploye.saveEmploye(employeForm.toEmploye()).toEmployeForm(),
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public EmployeForm updateEmploye(@PathVariable long id,
                                     @RequestBody EmployeForm employeFormDetail) {
        EmployeForm employe = serviceEmploye.getEmploye(id).orElseThrow(RuntimeException::new).toEmployeForm();

        employe.setNom(employeFormDetail.getNom());
        employe.setPrenom(employeFormDetail.getPrenom());
        employe.setFonction(employeFormDetail.getFonction());

        return serviceEmploye.saveEmploye(employe.toEmploye()).toEmployeForm();
    }


    @DeleteMapping("/{id}")
    public void deleteEmploye(@PathVariable long id) {
        EmployeForm employe = serviceEmploye.getEmploye(id).orElseThrow(RuntimeException::new).toEmployeForm();
        serviceEmploye.removeEmploye(employe.toEmploye());
    }
}