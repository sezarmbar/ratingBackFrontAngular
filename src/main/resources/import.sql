INSERT INTO user (id, username, password, firstname, lastname, created_at, updated_at, deleted_at) VALUES (1, 'user', '123', 'gesundHeit', 'user', null, null, null);
INSERT INTO user (id, username, password, firstname, lastname, created_at, updated_at, deleted_at) VALUES (2, 'admin', '123', 'Adminstrator', 'user', null, null, null);

INSERT INTO authority (id, name, created_at, updated_at) VALUES (1, 'ROLE_USER', null, null);
INSERT INTO authority (id, name, created_at, updated_at) VALUES (2, 'ROLE_ADMIN', null, null);

INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 2);

INSERT INTO rating (rating_id, bad, god, name_of_rat, normal, very_bad, very_god,active,waiting_time) VALUES (1, '5', '4', 'first', '5', '6', '7',TRUE ,44);
INSERT INTO rating (rating_id, bad, god, name_of_rat, normal, very_bad, very_god,active,waiting_time) VALUES (2, '5', '2', 'second', '2', '4', '4',TRUE,44 );


INSERT INTO review (review_text, rating_id) VALUES ('aaaaaaaaaaaaaaaaaaaaa', '1');

INSERT INTO review (review_text, rating_id) VALUES ('ccccccccccccccccccccccccc', '2');

INSERT INTO review (review_text, rating_id) VALUES ('dddddddddddddddddd', '1');

INSERT INTO review (review_text, rating_id) VALUES ('tttttttttttttttttt', '2');

INSERT INTO review (review_text, rating_id) VALUES ('yyyyyyyyyyyyyyyyyyyyyyyyyyyy', '1');

--