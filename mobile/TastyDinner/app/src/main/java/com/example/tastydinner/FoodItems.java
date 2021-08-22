package com.example.tastydinner;

import com.google.gson.annotations.SerializedName;
public class FoodItems {
    private String[] ingredients;
    private String id;
    private String createdAt;
    private String updatedAt;

    public String getCreatedAt() {
        return createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public String[] getIngredients() {
        return ingredients;
    }

    public String getId() {
        return id;
    }


}
