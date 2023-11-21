package com.example.demo.wallet.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    public Wallet create(double initialAmount) {
        // Implement logic to create a new wallet with an initial amount
        // For example, save the wallet to the repository
        Wallet wallet = new Wallet(initialAmount, null); // Assuming the wallet is not associated with any user initially
        return walletRepository.save(wallet);
    }

    public void depositAmount(Wallet wallet, double amount) {
        // Implement logic to deposit an amount to the wallet
        // For example, add the amount to the current wallet balance
        wallet.setAmount(wallet.getAmount() + amount);
        walletRepository.save(wallet);
    }

    public void deductAmount(Wallet wallet, double amount) {
        // Implement logic to deduct an amount from the wallet
        // For example, subtract the amount from the current wallet balance
        wallet.setAmount(wallet.getAmount() - amount);
        walletRepository.save(wallet);
    }

    public Wallet findById(Long id) {
        // Implement logic to retrieve a wallet by ID from the repository
        // For example, use walletRepository.findById(id)
        return walletRepository.findById(id).orElse(null);
    }
}
