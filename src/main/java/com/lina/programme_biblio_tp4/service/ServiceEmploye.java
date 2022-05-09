package com.lina.programme_biblio_tp4.service;

import com.lina.programme_biblio_tp4.dtos.utilisateurs.EmployeDto;
import com.lina.programme_biblio_tp4.modele.Employe;
import com.lina.programme_biblio_tp4.modele.Fonction;
import com.lina.programme_biblio_tp4.repository.EmployeRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class ServiceEmploye {

    private EmployeRepository employeRepository;

    public ServiceEmploye(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }

    public EmployeDto saveEmploye(String nom, String prenom, String fonction) {
        Employe employe = employeRepository.save(new Employe(
                nom,
                prenom,
                fonction == null ? null : Fonction.valueOf(fonction)));
        return employe.toEmployeForm();
    }

    public EmployeDto saveEmploye(Employe employe) {
        return employeRepository.save(employe).toEmployeForm();
    }

    public void removeEmploye(Employe employe) {
        employeRepository.delete(employe);
    }

    public EmployeDto getEmploye(long employeID) {
        return employeRepository.findById(employeID).orElseThrow(RuntimeException::new).toEmployeForm();
    }

    public List<EmployeDto> findAllEmployes() {
        List<Employe> employeList = employeRepository.findAll();
        List<EmployeDto> employeDtoList = new ArrayList<>();

        for (Employe employe : employeList) {
            employeDtoList.add(employe.toEmployeForm());
        }

        return employeDtoList;
    }
}