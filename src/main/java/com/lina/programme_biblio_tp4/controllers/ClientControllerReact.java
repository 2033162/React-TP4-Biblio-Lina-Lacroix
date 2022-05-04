package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.modele.Client;
import com.lina.programme_biblio_tp4.repository.ClientRepository;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/clients")
public class ClientControllerReact {

    private ServiceClient serviceClient;
    private ClientRepository clientRepository;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Client> getAllClients() {
        return serviceClient.findAllClients();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable long id) {
        return serviceClient.getClient(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin(origins = "http://localhost:3000")
    public Client addClient(@RequestBody Client client) {
        return serviceClient.saveClient(client);
    }

    @PatchMapping("/{id}")
    public Client updateClient(@PathVariable long id, @RequestBody Client clientDetail) {
        Client client = clientRepository.getById(id);

        client.setNom(clientDetail.getNom());
        client.setPrenom(clientDetail.getPrenom());
        client.setRue(clientDetail.getRue());
        client.setVille(clientDetail.getVille());
        client.setCodePostal(clientDetail.getCodePostal());
        client.setNumeroTelephone(clientDetail.getNumeroTelephone());
        client.setDateInscription(clientDetail.getDateInscription());

        return clientRepository.save(client);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable long id) {
        Client client = clientRepository.getById(id);

        serviceClient.removeClient(client);
    }
}
