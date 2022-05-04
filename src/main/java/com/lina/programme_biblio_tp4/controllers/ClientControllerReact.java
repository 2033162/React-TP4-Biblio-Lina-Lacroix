package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.forms.ClientForm;
import com.lina.programme_biblio_tp4.repository.ClientRepository;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/clients")
public class ClientControllerReact {

    private ServiceClient serviceClient;
    private ClientRepository clientRepository;

    @GetMapping
    public List<ClientForm> getAllClients() {
        return serviceClient.findAllClients();
    }

    @GetMapping("/{id}")
    public ClientForm getClient(@PathVariable long id) {
        return serviceClient.getClient(id).orElseThrow(RuntimeException::new).toClientForm();
    }

    @PostMapping
    public ResponseEntity<ClientForm> addClient(@RequestBody ClientForm clientForm) {
        return new ResponseEntity<>(serviceClient.saveClient(clientForm.toClient()).toClientForm(), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ClientForm updateClient(@PathVariable long id, @RequestBody ClientForm clientFormDetail) {
        ClientForm client = clientRepository.getById(id).toClientForm();

        client.setNom(clientFormDetail.getNom());
        client.setPrenom(clientFormDetail.getPrenom());
        client.setRue(clientFormDetail.getRue());
        client.setVille(clientFormDetail.getVille());
        client.setCodePostal(clientFormDetail.getCodePostal());
        client.setNumeroTelephone(clientFormDetail.getNumeroTelephone());
        client.setDateInscription(clientFormDetail.getDateInscription());

        return clientRepository.save(client.toClient()).toClientForm();
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable long id) {
        ClientForm client = clientRepository.getById(id).toClientForm();

        serviceClient.removeClient(client.toClient());
    }
}
