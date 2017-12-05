/***************************************************************************
Establish the account table and reimbursement table on database

title:
1 = admin   
2 = user

status:
1 = pending
2 = active
3 = rejected
4 = closed

post_type:
1. sale
2. want


Potential:
ADDRESS TABLE

***************************************************************************/


CREATE TABLE EFLEA_ACCOUNT
(
    email VARCHAR2(128),
    password VARCHAR(32) NOT NULL,
    username VARCHAR(64) NOT NULL,
    titleId NUMBER DEFAULT 2,
    createDate DATE DEFAULT SYSDATE,
    Phone VARCHAR2(24),
    CONSTRAINT PK_EFLEAEMAIL PRIMARY KEY (email)
);

CREATE TABLE EFLEA_POST
(
    postId NUMBER,
    postEmail VARCHAR2(128),
    postDate DATE DEFAULT SYSDATE,
    statusId NUMBER DEFAULT 1,
    typeId NUMBER NOT NULL,
    City VARCHAR2(40),
    State VARCHAR2(40),
    Country VARCHAR2(40),
    Zip VARCHAR2(10),
    description VARCHAR(2048),
    CONSTRAINT PK_EFLEAPOSTID PRIMARY KEY (POSTID)
);



CREATE TABLE EFLEA_IMAGE
(
    imageId NUMBER,
    postId Number,
    url VARCHAR(128) NOT NULL,
    CONSTRAINT PK_EFLEAIMAGEID PRIMARY KEY (IMAGEID)
    
);

CREATE TABLE EFLEA_STATUS
(
    statusId NUMBER,
    status VARCHAR2(16),
    CONSTRAINT PK_EFLEASTATUSID PRIMARY KEY (STATUSID)
);

CREATE TABLE EFLEA_POSTTYPE
(
    typeId NUMBER,
    type VARCHAR2(16),
    CONSTRAINT PK_EFLEATYPEID PRIMARY KEY (TYPEID)
);

CREATE TABLE EFLEA_TITLE
(
    titleId NUMBER,
    title VARCHAR(16),
    CONSTRAINT PK_EFLEATITLEID PRIMARY KEY (TITLEID)
);




ALTER TABLE EFLEA_POST MODIFY POSTDATE NOT NULL NOVALIDATE;
COMMIT;

/* ADD FOREIGN KEY CONSTRAINT */
ALTER TABLE EFLEA_ACCOUNT ADD CONSTRAINT FK_EFLEATITLEID
    FOREIGN KEY (titleId) REFERENCES EFLEA_TITLE(titleId)
    ON DELETE CASCADE;
ALTER TABLE EFLEA_POST ADD CONSTRAINT FK_EFLEASTATUSID
    FOREIGN KEY (statusId) REFERENCES EFLEA_STATUS(statusId)
    ON DELETE CASCADE;
ALTER TABLE EFLEA_POST ADD CONSTRAINT FK_EFLEATYPEID
    FOREIGN KEY (TYPEID) REFERENCES EFLEA_POSTTYPE (TYPEID)
    ON DELETE CASCADE;
ALTER TABLE EFLEA_POST ADD CONSTRAINT FK_EFLEAEMAIL
    FOREIGN KEY (POSTEMAIL) REFERENCES EFLEA_ACCOUNT (EMAIL)
    ON DELETE CASCADE;
ALTER TABLE EFLEA_IMAGE ADD CONSTRAINT FK_EFLEAPOSTID
    FOREIGN KEY (POSTID) REFERENCES EFLEA_POST(POSTID)
    ON DELETE CASCADE;

COMMIT;

ROLLBACK;


/*  INSERT LOOK UP TABLE DATA */
INSERT INTO EFLEA_TITLE(titleId, title)
    VALUES (1, 'Admin');
INSERT INTO EFLEA_TITLE(titleId, title)
    VALUES (2, 'User');


/* INSERT ACCOUNT DATA */
INSERT INTO EFLEA_ACCOUNT(EMAIL, PASSWORD, USERNAME, TITLEID, CREATEDATE, PHONE)
    VALUES('junli@eflea.com', 'eflea', 'Admin-Jun',1, 
    CURRENT_TIMESTAMP, '1-777-777-7777');

INSERT INTO EFLEA_ACCOUNT(EMAIL, PASSWORD, USERNAME, TITLEID, CREATEDATE, PHONE)
    VALUES('kanxue@eflea.com', 'eflea', 'Admin-Kan',1, 
    CURRENT_TIMESTAMP, '1-333-333-3333');
COMMIT;

/* INSERT POST DATA */
INSERT INTO EFLEA_POST(POSTID, POSTEMAIL, TITLE, STATUSID, TYPEID, CITY, STATE, COUNTRY, ZIP, DESCRIPTION)
    VALUES(1,'baduser@eflea.com','Sale post 01', 2,1, 'Flushing','New York', 'United States','11355','description for sales post 1');
COMMIT;

INSERT INTO EFLEA_POST(POSTID, POSTEMAIL, TITLE, STATUSID, TYPEID, CITY, STATE, COUNTRY, ZIP, DESCRIPTION)
    VALUES(2,'baduser@eflea.com','Want Post 01', 2,2, 'Bayside','New York', 'United States','11354','description for want post 1');
COMMIT;


/* INSERT IMAGE DATA */
INSERT INTO EFLEA_IMAGE(IMAGEID, POSTID, URL)
    VALUES(1, 1, 'https://i.imgur.com/ExNxqXb.jpg/');
COMMIT;
INSERT INTO EFLEA_IMAGE(IMAGEID, POSTID, URL)
    VALUES(2, 2, 'https://i.imgur.com/MUP4EP0.jpg/');
COMMIT;

    
    
    

