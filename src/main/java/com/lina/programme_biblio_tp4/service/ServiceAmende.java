package com.lina.programme_biblio_tp4.service;

import com.lina.programme_biblio_tp4.repository.AmendeRepository;
import org.springframework.stereotype.Component;

@Component
public class ServiceAmende {

    private AmendeRepository amendeRepository;

    public ServiceAmende(AmendeRepository amendeRepository) {
        this.amendeRepository = amendeRepository;
    }

    public void deleteAllAmende() {
        amendeRepository.deleteAll();
    }
}
