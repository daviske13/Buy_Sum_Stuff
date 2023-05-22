-- Insert test data for department table
INSERT INTO department (name) VALUES ('Department A'), ('Department B'), ('Department C');

-- Insert test data for role table
INSERT INTO role (title, salary, department_id) VALUES
    (CEO', 50000, 1),
    ('Engineer', 60000, 1),
    ('CSR', 70000, 2);

-- Insert test data for employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Ron', 'Doe', 1, NULL),
    ('Katie', 'Smith', 2, 1),
    ('Emily', 'Johnson', 3, 1);
