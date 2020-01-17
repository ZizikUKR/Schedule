
CREATE TABLE public.ToDoTasks
(
    Id BIGSERIAL NOT NULL PRIMARY KEY,
    CreationDate  timestamp DEFAULT current_timestamp,
    State smallint NOT NULL,
    ToDo text NULL,
    Description text NULL,
    Information text NULL,
	IsComppleted boolean NOT NULL
);