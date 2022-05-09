package com.lina.programme_biblio_tp4.controllers.utilisateurs;

import com.lina.programme_biblio_tp4.dtos.utilisateurs.ClientDto;
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

    @GetMapping
    public List<ClientDto> getAllClients() {
        return serviceClient.findAllClients();
    }

    @GetMapping("/{id}")
    public ClientDto getClient(@PathVariable long id) {
        return serviceClient.getClient(id).orElseThrow(RuntimeException::new).toClientForm();
    }

    @PostMapping
    public ResponseEntity<ClientDto> addClient(@RequestBody ClientDto clientDto) {
        return new ResponseEntity<>(serviceClient.saveClient(clientDto.toClient()).toClientForm(),
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ClientDto updateClient(@PathVariable long id, @RequestBody ClientDto clientDtoDetail) {
        ClientDto client = serviceClient.getClient(id).orElseThrow(RuntimeException::new).toClientForm();

        client.setNom(clientDtoDetail.getNom());
        client.setPrenom(clientDtoDetail.getPrenom());
        client.setRue(clientDtoDetail.getRue());
        client.setVille(clientDtoDetail.getVille());
        client.setCodePostal(clientDtoDetail.getCodePostal());
        client.setNumeroTelephone(clientDtoDetail.getNumeroTelephone());
        client.setDateInscription(clientDtoDetail.getDateInscription());

        return serviceClient.saveClient(client.toClient()).toClientForm();
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable long id) {
        ClientDto client = serviceClient.getClient(id).orElseThrow(RuntimeException::new).toClientForm();
        serviceClient.removeClient(client.toClient());
    }
}
