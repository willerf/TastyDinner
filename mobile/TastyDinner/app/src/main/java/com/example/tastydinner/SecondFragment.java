package com.example.tastydinner;

import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class SecondFragment extends Fragment {


    public TextView firstRecipe ;
    public TextView secondRecipe;
    public TextView thirdRecipe;
    public TextView fourthRecipe;
    public TextView fifthRecipe;
    private TextView myAwesomeTextView;
    private String[] ingredientsList;



    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_second, container, false);
        firstRecipe = v.findViewById(R.id.recipe1ingredients);
        secondRecipe = v.findViewById(R.id.recipe2ingredients);
        thirdRecipe = v.findViewById(R.id.recipe3ingredients);
        fourthRecipe = v.findViewById(R.id.recipe4ingredients);
        fifthRecipe = v.findViewById(R.id.recipe5ingredients);


        // Inflate the layout for this fragment
        //return inflater.inflate(R.layout.fragment_second, container, false);
        return v;
    }


    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;


    public SecondFragment() {
    }


    public static SecondFragment newInstance(String param1, String param2) {
        SecondFragment fragment = new SecondFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }

        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:3001/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        JsonPlaceHolderApi jsonPlaceHolderApi = retrofit.create(JsonPlaceHolderApi.class);

        Call<List<FoodItems>> call = jsonPlaceHolderApi.getPost();

        call.enqueue(new Callback<List<FoodItems>>() {
            @Override
            public void onResponse(Call<List<FoodItems>> call, Response<List<FoodItems>> response) {

                if (!response.isSuccessful()){
                    myAwesomeTextView.setText("Cod: " + response.code());
                    return;
                }

                List<FoodItems> posts = response.body();

                int j = 0;
                for (FoodItems post: posts){
                    String content =" Ingredients: \n";
                    ingredientsList = post.getIngredients();

                    for (int i = 0; i < ingredientsList.length; i++){
                        content+= " " + ingredientsList[i] + "\n";
                    }

                    switch (j){
                        case 0:
                            firstRecipe.setText(content);
                            break;
                        case 1:
                            secondRecipe.setText(content);
                            break;
                        case 2:
                            thirdRecipe.setText(content);
                            break;
                        case 3:
                            fourthRecipe.setText(content);
                            break;
                        case 4:
                            fifthRecipe.setText(content);
                            break;
                    }
                    j++;
                    //myAwesomeTextView.append(content)  ;
                }
            }

            @Override
            public void onFailure(Call<List<FoodItems>> call, Throwable t) {
                myAwesomeTextView.setText(t.getMessage()+"this is a test");
            }
        });



    }
}