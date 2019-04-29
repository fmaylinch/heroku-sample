package tech.bts.herokusample.api;

import com.mongodb.client.*;
import org.bson.Document;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Consumer;

@RestController
@RequestMapping(path = "/api")
public class SampleApi {

    private MongoCollection<Document> words;

    public SampleApi() {

        final MongoClient mongoClient = MongoClients.create("mongodb+srv://test:12345678aA@bts-cluster-r1swc.mongodb.net/test");
        final MongoDatabase database = mongoClient.getDatabase("test");
        this.words = database.getCollection("words");
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from sample app";
    }

    // insert?word=dog
    @GetMapping("/insert")
    public String insertWord(@RequestParam String word) {

        final Document doc = new Document()
                .append("word", word)
                .append("date", new Date());

        words.insertOne(doc);

        return "Word inserted: " + word;
    }

    // insert?word=dog
    @GetMapping("/list")
    public List<String> listWords() {

        final List<String> result = new ArrayList<>();

        words.find().forEach((Consumer<? super Document>) doc -> {
            result.add(doc.getString("word"));
        });

        return result;
    }
}
