

#### Instructions


Create a new repository on the command line

touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:imalberto/perfapp2.git
git push -u origin master

Push an existing repository from the command line

git remote add origin https://github.com/imalberto/perfapp2.git
git push -u origin master


#### App Structure

perfapp used for benchmarking binder and firstbyte changes.


specs

    frame (deleted)
        type: ShakerHTMLFrameMojit
    index (delete)
        base: frame
    app:
        type: Layout
    app2: // only with 2 instances of ListMojit
        type: Layout
    html_frame:
        type: HTMLFrameMojit
    firstbyte_frame:
        type: FirstByteFrameMojit
    html_index:
        base: html_frame
    firstbyte_index:
        base: firstbyte_frame

    static_app:
        type: Layout
            children: // static list mojits

    test_html_frame:
        base: static_app
    test_firstbyte_frame:
        base: app





