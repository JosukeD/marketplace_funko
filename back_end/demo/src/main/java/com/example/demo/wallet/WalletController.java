package com.example.demo.wallet.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @PostMapping("/create")
    public ResponseEntity<Wallet> createWallet(@RequestParam double initialAmount) {
        return new ResponseEntity<>(walletService.create(initialAmount), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Wallet> getWalletById(@PathVariable Long id) {
        return new ResponseEntity<>(walletService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/deposit")
    public ResponseEntity<String> depositAmount(@PathVariable Long id, @RequestParam double amount) {
        Wallet wallet = walletService.findById(id);
        if (wallet != null) {
            walletService.depositAmount(wallet, amount);
            return ResponseEntity.status(HttpStatus.OK).body("Amount deposited successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Wallet not found");
        }
    }
}
