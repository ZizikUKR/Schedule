CREATE TABLE public.ToDoTasks
(
    Id bigint NOT NULL,
    CreationDate  timestamp DEFAULT current_timestamp,
    State smallint NOT NULL,
    ToDo text NULL,
    Description text NULL,
    Information text NULL,
	IsComppleted boolean NOT NULL,
    CONSTRAINT "PK_ToDoTasks" PRIMARY KEY (Id)
);