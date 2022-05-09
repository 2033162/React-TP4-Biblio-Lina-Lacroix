package com.lina.programme_biblio_tp4.controllers.utilisateurs;

import com.lina.programme_biblio_tp4.dtos.utilisateurs.EmployeDto;
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
    public List<EmployeDto> getAllEmployes() {
        return serviceEmploye.findAllEmployes();
    }

    @GetMapping("/{id}")
    public EmployeDto getEmploye(@PathVariable long id) {
        return serviceEmploye.getEmploye(id);
    }

    @PostMapping
    public ResponseEntity<EmployeDto> addEmploye(@RequestBody EmployeDto employeDto) {
        return new ResponseEntity<>(serviceEmploye.saveEmploye(employeDto.toEmploye()),
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public EmployeDto updateEmploye(@PathVariable long id,
                                    @RequestBody EmployeDto employeDtoDetail) {
        EmployeDto employe = serviceEmploye.getEmploye(id);

        employe.setNom(employeDtoDetail.getNom());
        employe.setPrenom(employeDtoDetail.getPrenom());
        employe.setFonction(employeDtoDetail.getFonction());

        return serviceEmploye.saveEmploye(employe.toEmploye());
    }


    @DeleteMapping("/{id}")
    public void deleteEmploye(@PathVariable long id) {
        EmployeDto employe = serviceEmploye.getEmploye(id);
        serviceEmploye.removeEmploye(employe.toEmploye());
    }
}