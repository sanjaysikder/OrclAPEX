# Oracle APEX File Extension Validation (PL/SQL Based)

This project adds server-side validation in Oracle APEX to restrict file uploads to specific formats (`PNG`, `PDF`, `JPEG`, `JPG`, `GIF`). It uses a **PL/SQL Function Body (returning Boolean)** as the validation method.

---

## ✅ Supported File Extensions

- `.png`
- `.pdf`
- `.jpeg`
- `.jpg`
- `.gif`

---

## 📦 Validation Code (PL/SQL)

Paste the following code in a **Validation** with type:  
`Function Body (returning Boolean)`

```plsql
DECLARE
    v_exct VARCHAR2(10);
BEGIN
    -- Extract file extension in lowercase
    SELECT LOWER(REGEXP_SUBSTR(:P40_DOC_FILE, '\.([^.]+)$', 1, 1, NULL, 1))
    INTO v_exct
    FROM dual;

    IF v_exct IN ('png', 'pdf', 'jpeg', 'jpg', 'gif') THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;



## 🆘 Help Text:
Only **PNG**, **PDF**, **JPEG**, **JPG**, or **GIF** files are allowed.

## ❌ Error Message:
Invalid file format. Please upload a file in **PNG**, **PDF**, **JPEG**, **JPG**, or **GIF** format.



