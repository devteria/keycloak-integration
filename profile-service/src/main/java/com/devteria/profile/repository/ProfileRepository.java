package com.devteria.profile.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.devteria.profile.entity.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {}
