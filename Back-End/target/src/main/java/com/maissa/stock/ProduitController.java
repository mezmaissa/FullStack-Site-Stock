package com.maissa.stock;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProduitController {
	
	
	
	String url = "jdbc:mysql://docker-mysql:3306/spring_DB";
    String id = "root";
    String mdp = "root";
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/Produits") 
	public List<Produit> GetAllProduits() {
		List<Produit> p = new ArrayList<Produit>();
		Connection con;
		try {
			con = DriverManager.getConnection(url, id, mdp);
	    String query = "SELECT * FROM PRODUIT; ";
	    Statement stat = con.createStatement();
	      
	    ResultSet res = stat.executeQuery(query);
	    while (res.next())
	      {
	        long id = res.getLong("id");
	        String name = res.getString("name");
	        Double price = res.getDouble("price");
	        int stock = res.getInt("stock");
	        p.add( new Produit(id, name, price, stock) );
	        
	      }
	      stat.close();
		return p;}
		catch (Exception e){
			System.err.println(e.getMessage());
		}
		return p;
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/Produit/{ID}") 
	public Produit GetProduit(@PathVariable int ID) {
		long l=ID; 
		Produit p = new Produit();
		try
	    {
		
		  Connection con = DriverManager.getConnection(url, id, mdp);
	      String query = "SELECT * FROM PRODUIT "
	      		+ "WHERE PRODUIT.id="+l+";";

	      Statement stat = con.createStatement();
	      
	      ResultSet res = stat.executeQuery(query);
	      
	      while (res.next())
	      {
	    	  long id = res.getLong("id");
		      String name = res.getString("name");
		      Double price = res.getDouble("price");
		      int stock = res.getInt("stock");
		      Produit produit =  new Produit(id, name, price, stock) ;
		      p = produit;
	   
	        
	      }
	      stat.close();
	      return p;
	    }
	    catch (Exception e)
	    {
	      System.err.println(e.getMessage());
	    }
		return p;
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/Delete/{ID}") // 
	public String DeleteProduit(@PathVariable int ID) {
		long l=ID;  
		try
	    {
		  Connection con = DriverManager.getConnection(url, id, mdp);
	      String query = "DELETE FROM PRODUIT "
	      		+ "WHERE PRODUIT.id="+l+";";

	      Statement stat = con.createStatement();
	      stat.executeUpdate(query);
	      stat.close();
	    }
	    catch (Exception e)
	    {
	      System.err.println(e.getMessage());
	    }
		return "Supprimer !";
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(value = "/Ajout")
	public String AddProduit(@RequestBody Produit produit) { 		
		try
	    {	    
		  Connection con = DriverManager.getConnection(url, id, mdp);
		  Statement stat = con.createStatement();
		  
	      String query = "INSERT INTO PRODUIT (name, price, stock)"
	      		+ "VALUES "
	      		+ "('"+produit.getName()+"', '"+produit.getPrice()+"', '"+produit.getStock()+"')";
	      stat.executeUpdate(query);
	      stat.close();
	    }
	    catch (Exception e)
	    {
	      System.err.println(e.getMessage());
	    }
		return "Ajouter !";
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/Modif")
	public String UpdateProduit(@RequestBody Produit produit) { 
		try
	    {	    
		  Connection con = DriverManager.getConnection(url, id, mdp);
		  Statement stat = con.createStatement();
		  
	      String query = "UPDATE PRODUIT "
	      		+ "SET "
	      		+ "name= '"+produit.getName()+"',"
	      		+ "price= '"+produit.getPrice()+"',"
	      		+ "stock= '"+produit.getStock()+"'"
	      		+ "WHERE id="+produit.getId()+";";
	      stat.executeUpdate(query);
	      stat.close();
	    }
	    catch (Exception e)
	    {
	      System.err.println(e.getMessage());
	    }
		return "maj !";
	}
}
