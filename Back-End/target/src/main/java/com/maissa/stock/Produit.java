package com.maissa.stock;


public class Produit {
	
	private Long id;
	private String name;
	private Double price;
	private int stock;
	
	
	
	
	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Produit(Long id, String name, Double price, int stock) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.stock = stock;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	
	@Override
	public String toString() {
		return "Produit [id=" + id + ", name=" + name + ", price=" + price + ", stock=" + stock + "]";
	}
	
}
