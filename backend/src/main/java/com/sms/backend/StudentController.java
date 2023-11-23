package com.sms.backend;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

/**
 * StudentController
 */
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class StudentController {
    private final StudentRepository studentRepository;

    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return student;
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        student.setId(id);
        studentRepository.save(student);
        return student;
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Student studentById(@PathVariable int id) {
        return studentRepository.findById(id).orElseThrow();
    }

    @GetMapping
    public List<Student> students() {
        return studentRepository.findAll();
    }
}