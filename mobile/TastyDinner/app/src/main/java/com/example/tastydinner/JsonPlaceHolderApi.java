package com.example.tastydinner;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface JsonPlaceHolderApi {

    @GET ("getIngredients")
    Call<List<FoodItems>> getPost();
}
