DROP table public."IterationTasks"
     
CREATE TABLE public."IterationTasks" (
    "contractId" integer NOT NULL,
    "contractName" character varying(255),
    "engineModel" character varying(255),
  	"year" integer,
  	"qtr" integer,
		"taskName" character varying(255)
);

ALTER TABLE public."IterationTasks" OWNER TO postgres;

INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'Prev Run');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'start date');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'Some Status');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'operate');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'Turn Around Time');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'Wing');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'expense');
INSERT INTO public."IterationTasks" values(1, 'Aer Lingus CF6-80E EIN3', 'CF6-80E', 2020, 2, 'last step');

SELECT "contractId", "contractName", "engineModel", "year", "qtr", "taskName" FROM public."IterationTasks" AS "IterationTasks" WHERE "IterationTasks"."contractId" = 1;

select * from public."IterationTasks";

