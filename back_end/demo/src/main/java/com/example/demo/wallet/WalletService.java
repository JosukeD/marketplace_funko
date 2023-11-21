package com.example.demo.wallet.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    public Wallet create(double initialAmount) {
        Wallet wallet = new Wallet(initialAmount, null);
        return walletRepository.save(wallet);
    }

    public void depositAmount(Wallet wallet, double amount) {
        wallet.setAmount(wallet.getAmount() + amount);
        walletRepository.save(wallet);
    }

    public void deductAmount(Wallet wallet, double amount) {
        wallet.setAmount(wallet.getAmount() - amount);
        walletRepository.save(wallet);
    }

    public Wallet findById(Long id) {
        return walletRepository.findById(id).orElse(null);
    }
}
