INSERT INTO departments (id, department_name)
VALUES (1, 'Research and Development'), (2, 'Sales'), (3, 'Human Resources'), (4, 'Engineer'), (5, 'Management'), (6, 'Accounting'), (7, 'Legal Team');

INSERT INTO roles (id, role_title, salary, department_id)
VALUES (1, 'Marketing Manager', 60000, 5), (2, 'Sales Team Lead', 100000, 2), (3, 'Front End Developer', 80000, 4), (4, 'Lawyer', 160000, 7), (5, 'Accountant', 80000, 6), (6, 'HR Specialist', 70000, 3), (7, 'Research Analyst', 100000, 1);

INSERT INTO managers (id, first_name, last_name)
VALUES (1, 'Jesse', 'Nay');

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (1, 'Fred', 'Johnson', 1, 1), (2, 'John', 'Doe', 2, 1), (3, 'Josh', 'Frankfurt', 3, 1), (4, 'Willow', 'Anderson', 4, 1), (5, 'Avery', 'Stewart', 5, 1), (6, 'Alex', 'Thompson', 6, 1), (7, 'Harry', 'Wellington', 7, 1);