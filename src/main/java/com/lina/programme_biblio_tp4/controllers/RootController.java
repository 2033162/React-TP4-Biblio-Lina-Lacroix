package com.lina.programme_biblio_tp4.controllers;

import com.lina.programme_biblio_tp4.modele.Client;
import com.lina.programme_biblio_tp4.service.ServiceClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class RootController {

    private ServiceClient serviceClient;

    @GetMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Client> getAllClients() {
        return serviceClient.findAllClients();
    }

    @PostMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Client> addClient(@RequestBody Client client) {
        serviceClient.saveClient(client);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}