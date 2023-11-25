package com.example.demo.models;

public class LoginResponseDTO {
    private ApplicationUser usuarios;
    private String jwt;

    public LoginResponseDTO(){
        super();
    }

    public LoginResponseDTO(ApplicationUser user, String jwt){
        this.usuarios = usuarios;
        this.jwt = jwt;
    }

    public ApplicationUser getUser(){
        return this.usuarios;
    }

    public void setUser(ApplicationUser user){
        this.usuarios = usuarios;
    }

    public String getJwt(){
        return this.jwt;
    }

    public void setJwt(String jwt){
        this.jwt = jwt;
    }

}