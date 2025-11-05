-- Inserting Tony Stark registry
INSERT INTO account (
        account_firstname,
        account_lastname,
        account_email,
        account_password
    )
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
-- Updating Tony Stark registry
UPDATE account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';
-- Deleting Tony Stark registry
DELETE FROM account
WHERE account_email = 'tony@starkent.com';
-- Modify the "GM Hummer" record
UPDATE inventory
SET inv_description = REPLACE(
        inv_description,
        'small interiors',
        'a huge interior'
    )
WHERE inv_make = 'GM'
    AND inv_model = 'Hummer';
-- Show inventory items that belong to the "Sport" category
SELECT i.inv_make,
    i.inv_model,
    c.classification_name
FROM inventory i
    INNER JOIN classification c ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';
-- Update all records in the inventory table to add "/vehicles"
UPDATE inventory
SET inv_image = REPLACE(
        inv_image,
        '/images/',
        '/images/vehicles/'
    ),
    inv_thumbnail = REPLACE(
        inv_thumbnail,
        '/images/',
        '/images/vehicles/'
    );