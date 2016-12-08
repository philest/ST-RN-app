
INPUTFOLDER1="original"
OUTPUT1="output_svg"
OUTPUT2="output_img"


rm -r $OUTPUT1 $OUTPUT2;
mkdir $OUTPUT1 $OUTPUT2;

for file in ./$INPUTFOLDER1/*
do
    FN=$(basename $file );
    BASE="${FN%.*}";

    OUT="${OUTPUT1}/${BASE}_spine.svg";
    (node makesvg.js --svg $file | sed -e 's/href/xlink:href/g' ) > $OUT;
    svg2png -o "${OUTPUT2}/${BASE}_spine.png" $OUT;
done
